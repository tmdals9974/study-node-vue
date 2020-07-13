<template>
    <header>
        <h1>{{ this.$store.state.headerText }}</h1>
    </header>
</template>

<style scoped>
/* scoped : 뷰 싱글파일 컴포넌트에서 사용 가능. 해당 컴포넌트에서만 유효하게 적용됨. */
h1 {
    color:#2F3B52;
    font-weight: 900; /* 폰트 굵기 */
    margin: 2.5rem 0 1.5rem; /* 바깥 여백 */
}
</style>