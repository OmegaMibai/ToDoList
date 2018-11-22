<template>
    <li v-if='text'>
        <p>{{text}}</p>
        <mt-button type="danger" @click='del(num)'>Del</mt-button>
    </li>
</template>
<script>
import { mapState,mapMutations } from "vuex"
import { MessageBox } from 'mint-ui'
export default {
    props:{
        text:{
            type:String,
            default:''
        },
        num:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            
        }
    },
    mounted(){
        console.log(this.text)
    },
    methods:{
        ...mapMutations(['SetDelToDoList']),
        del(num) {
             MessageBox.confirm('', { 
             message: '确认删除', 
             title: '提示', 
             confirmButtonText: '确定', 
             cancelButtonText: '取消' 
             }).then(action => { 
             if (action == 'confirm') {     //确认的回调
              console.log('点击的内容是--->>>',this.text)
              this.SetDelToDoList(num)
             }
             }).catch(err => { 
             if (err == 'cancel') {     //取消的回调
                 
             } 
             });

            
        }
    }
}
</script>

<style>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    border-bottom: 2px solid #ccc;
    padding: 0 20px;
}
</style>

