Vue.component('pane',{
	name:'pane',//递归组件
	temlate:`
		<div class="pane" v-show="show">
			<slot></slot>
		</div>
	`,
	data:function(){
		return	{
			show:true
		}
	},
	props:{
		name:{
			type:String
		},
		label:{
			type:String,
			default:''
		}
	},
	methods:{
		updateNav(){
			this.parent
		}
	}

})