<template>
    <el-card
        style="border-radius: 3px"
        class="article-card"
        :body-style="{ padding: '0' }"
    >
        <el-row>
            <el-col :span="10">
                <div style="overflow: hidden">
                    <img class="article-img" :src="img" />
                </div>
            </el-col>
            <el-col :span="14"
                ><div class="me-article">
                    <div class="me-article-header">
                        <span v-if="weight > 0">
                            <span class="me-article-fixed"></span>
                            <span class="me-article-fixed-text">置顶</span>
                        </span>
                        <span class="me-pull-right">
                            <span class="me-article-count">
                                <el-icon><ChatLineRound /></el-icon>&nbsp;{{
                                    commentCounts
                                }}
                            </span>
                            <span class="me-article-count">
                                <el-icon><View /></el-icon>&nbsp;{{
                                    viewCounts
                                }}
                            </span>
                            <span class="me-article-count">
                                <el-icon><Calendar /></el-icon>&nbsp;{{
                                    // $filters.format(createDate)
                                    createDate
                                }}
                            </span>
                        </span>
                    </div>
                    <a @click="view(title)" class="me-article-title">{{
                        title
                    }}</a>

                    <div class="me-article-description">
                        {{ summary }}
                    </div>
                    <div class="me-article-footer">
                        <el-icon class="tag-icon"><PriceTag /></el-icon>
                        <el-tag
                            v-for="t in tags"
                            :key="t.id"
                            size="small"
                            type="success"
                            class="article-tag"
                            @click="toTag(t)"
                            >{{ t }}</el-tag
                        >
                    </div>
                </div></el-col
            >
        </el-row>
    </el-card>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        id: Number,
        weight: Number,
        img: String,
        title: String,
        body: String,
        commentCounts: Number,
        viewCounts: Number,
        summary: String,
        author: String,
        tags: Array,
        createDate: String,
        updateDate: String,
    },
    data() {
        return {
            topShow: false,
        };
    },
    methods: {
        view(title) {
            this.$router.push({ path: '/view/' + title });
        },
        toTag(name) {
            this.$router.push({ path: `/tags/${name}` });
        },
    },
};
</script>

<style>
.article-card {
    font-family: '华康手札体W5P';
    width: 540px;
    height: 190px;
    margin-right: 10px;
    margin-bottom: 20px;
    background-color: var(--card_color);
    color: var(--text_color);
    border: solid 1.5px var(--border_color);
    transition: width 0s;
    transition: background-color 0.3s, border-color 0.3s;
    /* opacity: 0.7;
    transition: opacity 0.15s; */
}

.article-card .el-icon {
    top: 1.5px;
}

/* .article-card:hover {
    opacity: 0.85;
} */

.article-img {
    display: block;
    width: 100%;
    height: 190px;
    transition: transform 0.4s;
    padding-bottom: 10px;
}

.article-img:hover {
    transform: scale(1.1);
}

.me-article {
    padding: 7px 5px 15px 20px;
}

.me-article-header {
    height: 27px;
}

.me-article-title {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    font-weight: 600;
    font-size: 17px;
    top: -2px;
    color: var(--pink_color);
}
.me-article-title:hover {
    color: rgb(201, 129, 153);
}

.me-article-fixed-text {
    cursor: default;
    font-family: '华康手札体W5P';
    font-size: 13px;
    font-weight: 600;
    position: relative;
    color: #f56c6c;
    left: 2px;
    padding: 0;
}

.me-article-fixed {
    position: relative;
    background: url('@/assets/imgs/fixed.png') no-repeat;
    background-size: contain;
    width: 13px;
    height: 13px;
    top: 2px;
    display: inline-block;
}

.me-article-count {
    color: var(--text_color);
    padding-right: 5px;
    font-size: 13px;
}
.me-pull-right {
    float: right;
    margin-right: 5px;
}
.me-article-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 5px;
    height: 89px;
    padding-right: 10px;
}

.article-card .tag-icon {
    position: relative;
    top: 4px;
    color: #ff00ff;
}

.article-card .el-tag .el-tag__content {
    position: relative;
}

.article-tag {
    font-family: 'JetBrains Mono';
    margin-left: 6px;
    color: #ffffff;
    background-color: #ff00ff;
    border: 0;
    cursor: pointer;
}

.article-tag:hover {
    background-color: #e414e4;
}

.article-tag .me-view {
    height: 27px;
    width: 65px;
    background-color: hotpink;
    border-radius: 8px 0 0 0;
    text-indent: 10px;
}

@media screen and (max-width: 768px) {
    .article-card {
        width: 470px;
        margin: auto;
    }
}

@media screen and (max-width: 470px) {
    .article-card {
        width: 95%;
        margin: auto;
    }
}
</style>
