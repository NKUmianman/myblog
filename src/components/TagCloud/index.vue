<template>
    <el-card class="tag-card" :body-style="{ padding: '8px 18px' }">
        <div class="tag-header">标签云</div>
        <ul class="tag-list">
            <li class="tag-item" v-for="t in tags" :key="t.id">
                <!--type="primary"-->
                <el-button
                    @click="toTag(t.tagName)"
                    size="small"
                    :type="getType(t.id)"
                    >{{ t.tagName }}</el-button
                >
            </li>
        </ul>
    </el-card>
</template>

<script>
export default {
    name: 'CardTag',
    props: {
        tags: Array,
    },
    data() {
        return {};
    },
    methods: {
        getType(id) {
            var types = ['success', 'warning', 'danger', 'primary', 'info'];
            return types[(id - 1) % 5];
        },
        toTag(name) {
            this.$router.push({ path: `/tags/${name}` });
        },
    },
};
</script>

<style>
.tag-card {
    font-family: '华康手札体W5P';
    max-width: 280px;
    min-width: 230px;
    color: var(--text_color);
    border: solid 1.5px var(--border_color);
    background-color: var(--card_color);
    margin-left: 7px;
}

.tag-header {
    font-weight: 600;
    border-bottom: solid 2px var(--text_color);
}

.tag-list {
    list-style-type: none;
    padding-left: 0;
}

.tag-item {
    display: inline-block;
    padding: 4px;
    font-size: 14px;
    color: #5fb878;
}

.tag-item span {
    font-family: 'JetBrains Mono';
}

@media screen and (max-width: 768px) {
    .tag-card {
        display: none;
    }
}
</style>
