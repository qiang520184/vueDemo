<template function>
    <div ref="div">
        <h3>{{msg}}</h3>
        <h3>{{msg | formatMsg(params1, params2)}}</h3>
        <!-- <h3 v-my-html>{{msg | formatMsg(params1, params2)}}</h3> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Home页的高大上过滤器',
            params1: '高大上',
            params2: '辣鸡组件'
        };
    },
    directives: {
        myHtml: {
            inserted(el) {
                let left = /&lt;/g;
                let right = /&gt;/g;
                let htmlStr = el.innerHTML.replace(left, '<').replace(right, '>');
                el.innerHTML = htmlStr;
            }
        }
    },
    filters: {
        formatMsg(value, params1, params2) {
            if (!value) {
                return;
            }
            return value.replace(params1, params2);
            // return value.replace(params1, `<span style=color:red;>${params2}</span>`);
        }
    }
};
</script>
