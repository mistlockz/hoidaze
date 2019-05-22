<template>
  <div id="app">
    <!-- 

      <div id="nav">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      
    </div>
    -->
    
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
@import '@/styles/main.scss';

@font-face{
    font-family: holiRegular;
    src: url('assets/typefaces/NanumGothic-Regular.ttf');
};
@font-face{
    font-family: holiBold;
    src: url('assets/typefaces/NanumGothic-Bold.ttf');
};
@font-face{
    font-family: holiExtraBold;
    src: url('assets/typefaces/NanumGothic-ExtraBold.ttf');
};
#app {
  font-family: holiRegular;
  //text-align: center;
  color: $black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-underline-position: under;
    &.router-link-exact-active {
      color: $ui-blue;
    }
  }
}

</style>
