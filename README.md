# wep-Development
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"> 
	<link rel="stylesheet" type="text/css" href="./index.css">
</head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
*{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}
body {
	font-family: 'Indie Flower', cursive;
	overflow-x: hidden;
}
button {
	font-family: 'Indie Flower', cursive;
}
.navigation{
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 8vh;
	background-size: cover;
	font-family: 'Abril Fatface', cursive;
}
.navigation .logo{
	display: flex;
	letter-spacing: 2px;
	flex: 1;
}
.navigation .logo img{
	height: 60px;
}
.navigation .logo h4{
	padding-top: 11px;
	font-size: 23px;
	background:linear-gradient(to right, violet,indigo,blue, green,orange ,yellow, red);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
}
.nav-links{
	display: flex;
	justify-content: space-around;
	width: 60%;
	list-style-type: none;

}
.nav-links a{
	color:#013220;
	text-decoration: none;
	font-size:16px;
}
.nav-links a:hover{
	letter-spacing: 2px;
	font-size: 17px;
	background:linear-gradient(to right, violet,indigo,blue, green,orange ,yellow, red);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
}
.burger{
	display: none;
	padding-right: 15px;
	cursor: pointer;
}
.burger div{
	width: 25px;
	height: 2px;
	background:linear-gradient(to right, green ,yellow, red);
	margin: 5px;
}
@media screen and (min-width: 900px){
	.nav-links{
		width: 55%;
	}
}
@media screen and (max-width: 680px){
	body{
		overflow-x: hidden;
	}
	.nav-links{
		position: absolute;
		right: 0px;
		height: 50vh;
		top: 10vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 40%;
		transform: translateY(-120%);
		transition: transform 0.5s ease-in;
	}

	.burger{
		display: block;
	}
}

.nav-active{
	transform: translateY(0%);
}
	</style>
<body>
	<nav class="navigation">
		<div class="logo">
			<img src="img/mylogo.png">
			<h4>Inspire</h4>
		</div>
		<ul class="nav-links">
			<li><a href="#">link</a></li>
			<li><a href="#">Link</a></li>
			<li><a href="#">Link</a></li>
			<li><a href="autor.html">Contributor</a></li>
			<li><a href="design.html">Web Design</a></li>
			<li><a href="index.html">Home</a></li>
		</ul>
		<div class="burger">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
	</nav>
</body>
</html>
