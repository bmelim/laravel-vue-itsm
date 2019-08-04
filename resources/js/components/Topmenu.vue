<template>
  <div class="ui secondary menu">
    <a class="active item">Home</a>
    <a class="item">Messages</a>
    <a class="item">Friends</a>
    <div class="ui pointing dropdown link item">
    <span class="text">Shopping</span>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="header">Categories</div>
      <div class="item">
        <i class="dropdown icon"></i>
        <span class="text">Clothing</span>
        <div class="menu">
          <div class="header">Mens</div>
          <div class="item">Shirts</div>
          <div class="item">Pants</div>
          <div class="item">Jeans</div>
          <div class="item">Shoes</div>
          <div class="divider"></div>
          <div class="header">Womens</div>
          <div class="item">Dresses</div>
          <div class="item">Shoes</div>
          <div class="item">Bags</div>
        </div>
      </div>
      <div class="item">Home Goods</div>
      <div class="item">Bedroom</div>
      <div class="divider"></div>
      <div class="header">Order</div>
      <div class="item">Status</div>
      <div class="item">Cancellations</div>
    </div>
  </div>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <a @click="$emit('logout-event')" class="ui item">Logout</a>
    </div>
  </div>
</template>
