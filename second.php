<html>
<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="asset/js/main.js"></script>
	<title>Second</title>
</head>
<body>
	<div class="ajax-container">
		<header>
			<nav>
				<ul>
					<li><a href="index.php">index</a></li>
					<li><a href="second.php">second</a></li>
					<li><a target="_blank" href="google.com">google</a></li>
				</ul>
			</nav>
		</header>
		<div>
		<?php 
			for($i = 0; $i < 50000; $i++){
				echo "this is second page, it's very beautiful, ahihi<br>";
			}
		?>
		</div>
	</div>
</body>
</html>