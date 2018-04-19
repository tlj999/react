import React from 'react';
import formProvider from '../utils/formProvider';
import FormItem from '../components/FormItem';
import HomeLayout from '../layouts/HomeLayout';

class BookAdd extends React.Component{

    handleSubmit(e){
        e.preventDefault();
        const {form:{name,price,owner_id},formValid}=this.props;
        if(!formValid){
            alert('请正确填写信息');
            return;
        }
        fetch('http://localhost:3000/book',{
            method:'post',
            body:JSON.stringify({
                name:name.value,
                price:price.value,
                owner_id:owner_id.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((res)=>res.json())
            .then(res=>{
                if(res.id){
                    alert('添加成功')
                }else{
                    alert('添加失败')
                }
            })
    }

    render(){
        const {form:{name,price,owner_id},onFormChange}=this.props
        return (
            <HomeLayout title="添加书籍">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <FormItem label="书名：" valid={name.valid} error={name.error}>
                        <input type="text" value={name.value} onChange={(e)=>onFormChange('name',e.target.value)}/>
                    </FormItem>
                    <FormItem label="价格：" valid={price.valid} error={price.error}>
                        <input type="text" value={price.value} onChange={(e)=>onFormChange('price',e.target.value)}/>
                    </FormItem>
                    <FormItem label="编号：" valid={owner_id.valid} error={owner_id.error}>
                        <input type="text" value={owner_id.value} onChange={(e)=>onFormChange('owner_id',e.target.value)}/>
                    </FormItem>
                    <br/>
                    <button type="submit" >提交</button>
                </form>
            </HomeLayout>

        )
    }
}
BookAdd=formProvider({
    name:{
        defaultValue:'',
        rules:[{
            pattern:function (value) {
                return value.length>0
            },
            error:'请输入书名'
        }]
    },
    price:{
        defaultValue:0,
        rules:[{
            pattern:/[0-9]/,
            error:'只能输入数字'
        }]
    },
    owner_id:{
       defaultValue:'',
       rules:[{
           pattern:function (value) {
               return value.length>0
           },
           error:'请输入编号'
       }]
    }
})(BookAdd)
export default BookAdd;