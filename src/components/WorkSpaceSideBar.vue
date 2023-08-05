<template>
    <aside id = 'workspace__sidebar'>
        <p>workspace left side</p>
        <p>workspace left side</p>
        <div id="create_workspace" @click="openPopup()">
            <button> + </button>
            <span> 워크스페이스 생성</span>
        </div>

    </aside>
</template>

<script>

export default {
    name: 'WorkspaceSideBar',

    methods : {
        openPopup(){
            this.$emit("openCreateWorkspace", true)
        }
    }

}
</script>

<style>
#workspace__sidebar {
    width: 15%;
    float: left;
    /* border-bottom: 1px solid #0000001a; */
    background: #350d36;
    height: 95vh;

}
p {
    color: aliceblue;
}
span {
    color: white;
}

</style>