<!-- /resources/views/vue/index.blade.php -->
@extends('layouts.app')
@section('content')
    <div class="container">
        <h1>This is a vue component</h1>
        <div id="app">
            <router-view></router-view>
        </div>
    </div>
 <script src="/js/vue-app.js"></script>
@endsection
