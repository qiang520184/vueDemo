<template>
  <div class="about">
    <h3>About页</h3>
    <h1 v-my-html="{data: _data}">
      {{ text }}
    </h1>
    <!-- <h1>{{ msg | format }}</h1> -->
    <input
      ref="input" 
      v-model="input" 
      class="input" 
      type="text" 
      @focus="inputFn(input,'focus')" 
      @blur="inputFn(input,'blur')"
    >
    <button
      type="button"
      @click="btn"
    >
      提交
    </button>
    <ul v-if="dataList.length">
      <li
        v-for="(item, index) in dataList"
        :key="index"
      >
        {{ item }}
      </li>
    </ul> 
  </div>
</template>

<script>
// import {setTimeout} from 'timers';
import {mapActions, mapGetters} from 'vuex';
export default {
    directives: {
        myHtml: {
            inserted(el, binding, VNode) {
                // console.log(el, binding, binding.value.that);
                let that = VNode.context;
                // console.log(VNode.context);
                setTimeout(() => {
                    // binding.value.that._data.text = 'hahhahaha';
                    console.log(that, binding, that.$store);
                    // that.getApi();
                    // that.$router.push('/home');
                    // that.$refs.input.value = 'none';
                    // that.blur();
                    // that.focus();
                    // that.btn();
                }, 500);
            }
        }
    },
    filters: {
        format(el, type) {
            console.log(el, type);
            return el;
        }
    },
    data() {
        return {
            text: '哈哈哈哈哈哈',
            msg: 'About页的高大上过滤器',
            params1: '高大上',
            params2: '辣鸡组件',
            input: ''
        };
    },
    computed: {
        ...mapGetters([
            'user'
        ]),
        dataList() {
            return this.user.list;
        }
    },
    mounted() {
        this.getApi();
    },
    methods: {
        ...mapActions([
            'getApi'
        ]),
        inputFn(item, type) {
            if (type === 'blur') {
                console.log(item);
                if (item === '' || Number(item).toFixed(2) === 0 || item === 0) {
                    console.log('不验证，直接更新仓库');
                } else {
                    if (!this.verifyNumber(this.input)) {
                        console.log(this.formatNumber(item), '验证通过');
                    } else {
                        alert('数值不正确');
                    }
                }
            }
            if (type === 'focus') {
                console.log(item, 'focus');
            }
        },
        // 格式数值 加千分位符
        formatNumber(item) {
            console.log(item);
            return item.toLocaleString();
        },
        btn() {
            if (!this.verifyNumber(this.input) || this.input === '' || Number(this.input).toFixed(2) === 0 || this.input === 0) {
                console.log('提交成功');
            } else {
                alert('数值不正确');
            }
        },
        // 验证是否是非数值 true 提示
        verifyNumber(item) {
            if (item) {
                if (item.includes(',')) {
                    item = item.replace(/,/g, '');
                }
                if (item.includes('.')) {
                    item = Number(item).toFixed(2);
                }
                if (!isNaN(item) || /^\d+(\.\d+|\.)?$/.test(item)) {
                    return false;
                }
            }
            return true;
        }
    }
};
</script>

<style scoped lang="less">
.input {
    border: 1px solid #ccc;
}
</style>

