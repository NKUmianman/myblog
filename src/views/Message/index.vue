<template>
    <Loading v-if="loading" />
    <Navbar ref="navbar" />
    <div class="message-container">
        <div class="barrage">
            <span
                v-for="item in messagelist"
                :key="item.id"
                :style="{ top: item.top, right: item.right }"
                class="barrage-item"
                >{{ item.content }}</span
            >
        </div>
        <div
            style="display: flex; justify-content: center; align-items: center"
        >
            <el-card class="msg-input-card">
                <div class="msg-header">留言框</div>
                <div style="text-align: center">
                    <el-input
                        v-model="message"
                        placeholder="说点什么吧..."
                        class="msg-input"
                        @keyup.enter="addMessage"
                    ></el-input>
                    <el-button
                        type="primary"
                        class="msg-btn"
                        @click="addMessage"
                    >
                        提交
                    </el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
import Loading from '@/components/Loading/index';
import { ElMessage } from 'element-plus';

export default {
    data() {
        return {
            message: '',
            messagelist: [],
            noData: false,
            loading: true,
        };
    },
    components: { Navbar, Loading },
    methods: {
        getMessage() {
            this.axios
                .post('http://111.229.204.126:8000/messagelist/get/')
                .then((res) => {
                    //Result(success,msg,data)
                    // console.log(id);
                    if (res.data.success) {
                        // console.log(res.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.messagelist = res.data.data;
                        }
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
        },
        addMessage() {
            const params = new URLSearchParams();
            params.append('top', Math.floor(Math.random() * 70) + 'vh');
            params.append('right', Math.floor(Math.random() * 70) + 'vw');
            params.append('message', this.message);
            if (this.message) {
                if (this.message.length < 50) {
                    this.axios
                        .post(
                            'http://111.229.204.126:8000/message/add/',
                            params
                        )
                        .then((res) => {
                            //Result(success,msg,data)
                            // console.log(id);
                            if (res.data.success) {
                                // console.log(res.data);
                                this.message = '';
                                this.getMessage();
                            }
                        })
                        .catch((err) => {
                            // this.$message.error('文章加载失败');
                        })
                        .finally(() => {});
                } else {
                    ElMessage({
                        message: '输入内容不能超过50个字符',
                        type: 'warning',
                    });
                }
            } else {
                ElMessage({
                    message: '输入内容不能为空',
                    type: 'warning',
                });
            }
            // this.message = '';
            // this.getMessage();
        },
    },
    mounted() {
        this.getMessage();
        this.loading = false;
    },
};
</script>

<style>
.message-container {
    padding-top: 90px;
}

.barrage {
    position: relative;
    height: calc(100vh - 90px);
    overflow: hidden;
}

.barrage-item {
    z-index: 100;
    font-family: '华康手札体W5P';
    position: relative;
    background-color: #f38cee;
    border-radius: 1rem;
    padding: 5px 10px 5px 10px;
    white-space: nowrap;
    animation: barrageMove 13s linear infinite;
}

.msg-input-card {
    font-family: '华康手札体W5P';
    position: absolute;
    top: 42%;
    width: 370px;
    height: 130px;
    color: var(--text_color);
    background-color: var(--card_color);
    margin-left: 7px;
    text-align: center;
    border: solid 1.5px var(--border_color);
    opacity: 0.5;
    transition: opacity 0.3s;
}

.msg-input-card .el-card__body {
    padding: 8px 16px;
}

.msg-input-card:hover {
    opacity: 1;
}

.msg-header {
    text-align: start;
    font-weight: 600;
    font-size: 20px;
    border-bottom: solid 2px var(--text_color);
    margin-bottom: 23px;
}

.msg-input {
    border: solid 1px var(--border_color);
    border-radius: 0.1rem;
    width: 60%;
    margin-right: 10px;
}

.msg-input .el-input__wrapper {
    border-radius: 0;
    border: 0;
    background-color: var(--card_color);
}

.msg-input .el-input__inner {
    color: var(--text_color);
}

.msg-btn {
    position: relative;
    width: 55px;
    border-radius: 0.1rem;
    border: solid 1.5px var(--border_color);
    color: var(--text_color);
    background-color: #6399fc;
    cursor: pointer;
    top: 0.1px;
    height: 34.3px;
}

.msg-btn:hover {
    border-radius: 0.1rem;
    color: var(--text_color);
    background-color: rgb(146, 177, 235);
    border: solid 1.5px var(--border_color);
}

@keyframes barrageMove {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
</style>
