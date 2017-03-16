;//定义焦点图类
// 属性：img列表数据 标题列表数据 
// 方法：自动切换setIntral
// 	左右或上下按钮点击事件
// 	鼠标移上去停止
// 	menu鼠标移上去切换事件
(function(){

	function WshFocus(box,isShowTabBtn) {
		//return new WshFocus.prototype.init(wrapid);
		this.wrapid=box;		
		this.isShowTabBtn=isShowTabBtn;
		this._tick=0//索引统计
	}
	WshFocus.prototype={
		init:function(){
			var wrapid=this.wrapid,
				obj={},
				ol={},
				length=0,
				that=this,
				tmp,
				tmp1;
			//复制节点
			this.clone(wrapid);
			obj=wsh("#"+wrapid +" ul li");
			ol=wsh("#"+wrapid +" ol li");
			length=obj.length;
			that=this;

			this._length=obj.length;//li的个数
			this._obj=obj;//ul wsh类型的对象
			this._ol=ol;
			this._timer=null;//自动播放定时器
			this._timer2=null;//点击按钮后5秒恢复自动播放的定时器
			this._timer3=null;//鼠标移上去停止后5秒恢复自动播放的定时器	
			if (length<2) {
				return;
			};	

			this.autoPlay();

			//绑定dom事件
			//如果显示左右按钮
			if (this.isShowBtn) {
				wsh("#"+wrapid +" .btnLeft").bindEvent("click",function(){		
					that.clickHandle(-1);
				});
				wsh("#"+wrapid +" .btnRight").bindEvent("click",function(){
					that.clickHandle(1);
				});
			};			
			tmp=wsh("#"+wrapid +" ol");
			if (tmp.length>0) {
				tmp.bindEvent("mouseover",function(event){
					tmp1=wsh.getEventTarget(event);
					tmp.childNodes().each(function(key,item){
						if (item==tmp1) {
							that._tick=key;
						};
					});
					that.tabhoverHandle();
				});
			};
		},
		autoPlay:function(){
			var that=this;
			clearTimeout(this._timer2);
			this._timer=setInterval(function(){
				that._tick++;		
				that.ChangeFun(that._tick);				
			},3000);
		},
		stopAutoPaly:function(){
			clearInterval(this._timer);
		},
		replayAuto:function(){
			var that=this;
			this._timer2=setTimeout(function(){
				that.autoPlay();
			},5000);
		},
		ChangeFun:function(index){
			if (index<0 ) {				
				index=this._tick=this._length-1;
			}
			if (index >= this._length) {
				index=this._tick=0;
			};
			
			this._obj.eq(index).show();
			this._obj.eq(index).sublingNode().hide();
			this.ShowTabBar(index);
						
		},
		clickHandle:function(direction){
			var that=this;
			clearTimeout(this._timer2);
			this.stopAutoPaly();			
			if (direction>0) 
			{
				this._tick++;
			}else{				
				this._tick--;				
			};
			this.ChangeFun(this._tick);
			this.replayAuto();
		},
		tabhoverHandle:function(){
			this.stopAutoPaly();
			clearTimeout(this._timer2);
			this.ChangeFun(this._tick);
			this.replayAuto();
		},
		ShowTabBar:function(index){
			if (this.isShowTabBtn) {
				this._ol.eq(index).addClass('cur');
				this._ol.eq(index).sublingNode().removeClass('cur');
			};
		},
		clone:function(id,position){
			var obj=wsh('#'+id +' ul li');
			var length=obj.length;
			var targetObj1={},targetObj2={};			 
			var firstNode=obj.eq(0)[0];
			var lastNode=obj.eq(length-1)[0];
			var clone1=firstNode.cloneNode(true);
			var clone2=lastNode.cloneNode(true);
			obj.insertNode(clone2,firstNode);
			obj.insertNode(clone1);
		}
	};


	//渐变焦点图
	function FadeLoop(wrapid,isShowBtn,isShowTabBtn){
		WshFocus.call(this,wrapid);
		this.isShowBtn=isShowBtn;
		this.isShowTabBtn=isShowTabBtn;
		this._tick=0//索引统计
	}
	FadeLoop.prototype=new WshFocus(FadeLoop.wrapid);
	FadeLoop.prototype.ChangeFun=function(index){
			if (index<0 ) {				
				index=this._tick=this._length-1;
			}
			if (index >= this._length) {
				index=this._tick=0;
			};
			this._obj.each(function(key,item){
				// item.style.position="absolute";				
				// item.style.opacity="0";
				item.style.position="absolute";				
				item.style.opacity="0";
				item.style.filter="alpha(opacity=0)" ;
			});
			this._obj.eq(index).fadeIn();
			this._obj.eq(index).sublingNode().fadeOut();
			this.ShowTabBar(index);
	}

	//滚动焦点图
	function SildeLoop(wrapid,isShowBtn,isShowTabBtn){
		WshFocus.call(this,wrapid);
		this.isShowBtn=isShowBtn;
		this.isShowTabBtn=isShowTabBtn;
		this._tick=1//索引统计
	}
	SildeLoop.prototype=new WshFocus(SildeLoop.wrapid);
	SildeLoop.prototype.ChangeFun=function(index){
		var iWidth=this._obj[0].offsetWidth;
		var ul=this._obj.parentNode();
		var tmpLeft=0,tmpLast=0;
		var iLeft=0;
		var that=this;
		tmpLast=index;
			iLeft=-(index*iWidth)+"px";	
			this._obj[0].setAttribute('style','');
			ul.css({'left':iLeft,'transition':'all .5s'});
			if (index >= this._length-1) {
				tmpLast=index=this._tick=1;
				setTimeout(function () {
                    //重置wrap盒子为默认的其实位置开始，这里的css3的效果被去除了，所以看不出来有移动的效果，我们注意看transition-duration:0s;   
                   ul.css({'left':(-iWidth)+'px','transition':'all 0s'});  
                }, 300);
			}	
			if (index<1) {
				tmpLast=index=this._tick=this._length-2;
				setTimeout(function () {
                    //重置wrap盒子为默认的其实位置开始，这里的css3的效果被去除了，所以看不出来有移动的效果，我们注意看transition-duration:0s;   
                   ul.css({'left':-((that._length-2)*iWidth)+"px",'transition':'all 0s'});  
                }, 300);
			};	
			 this.ShowTabBar(index);
	}
	SildeLoop.prototype.ShowTabBar=function(index){
		var tIndex;
		if (index==0) {
			tIndex=this._length-2;
		}
		else if(index>=1 && index<=4)
		{
			tIndex = --index;
		}
		else{
			tIndex=0;
		}
		if (this.isShowTabBtn) {
				this._ol.eq(tIndex).addClass('cur');
				this._ol.eq(tIndex).sublingNode().removeClass('cur');
			};
	}
	

	function UIFocusWsh(type,wrapid,isShowBtn,isShowTabBtn){
		var ins;
		switch(type)
		{
			case 0:
				ins=new WshFocus(wrapid,isShowTabBtn);
			break;
			case 1:
				ins=new FadeLoop(wrapid,isShowBtn,isShowTabBtn);
			break;
			case 2:
				ins=new SildeLoop(wrapid,isShowBtn,isShowTabBtn);
			break;


		}
		ins.init();
	}
	window.UIFocusWsh=UIFocusWsh;
})();


//UIFocusWsh(1,'wshfocurs2',true,true,1);
UIFocusWsh(2,'wshfocurs3',true,true,0);