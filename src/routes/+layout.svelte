<nav class="navbar">
    <a href="/login" data-sveltekit-prefetch> Login</a>
    <a href="/signup" data-sveltekit-prefetch> Sign Up</a>
</nav>
<slot/>

<style>
    nav{
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #34b7df;
        height: 10vh;
        
    }
    nav a{
        text-decoration: none;
        font-size: 25px;
        color:white;
        float:right;
        height: 10vh;
        padding:20px;
    }
    nav a:hover{
        background-color: #2a94b4;
    }
  
</style>