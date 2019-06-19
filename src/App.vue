<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home" active-class="red">
                Home
            </router-link>
            <router-link to="/about" active-class="red">
                About
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.red {
    color: #f00;
}

#nav a {
    padding: 6px 8px;
    border-radius: 4px;
    outline: 0;
}
</style>
