<template>
 <div class="header-box">
   <nav class="navbar navbar-default" role="navigation">
	<div class="container-fluid"> 
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#example-navbar-collapse">
			<span class="sr-only">切换导航</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">坎坷的程序员</a>
	</div>
	<div class="collapse navbar-collapse" id="example-navbar-collapse">
		<ul class="nav navbar-nav">
			<router-link to="firstpagetwo">
			<li class="active">
				<a >首页</a></li>
				</router-link>
				<router-link to="casea">
			<li>
				<a>案例展示</a></li>
			</router-link>
			<router-link to="newcenter">
			<li>
				<a>新闻中心</a></li>
			</router-link>
			<router-link to="contactus">
			<li>
				<a>联系我们</a></li>
			</router-link>
			
		</ul>
	</div>
	</div>
</nav>
   </div> 
</template>

<script>
export default {
	
} 
</script>

<style>
a{
	color: gainsboro;
}
</style>