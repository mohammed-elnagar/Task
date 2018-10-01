<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HandleViewController extends Controller
{
    //
    public function coursto(){
        return view('app.coursetro');
    }

    public function example1(){
        return view('app.example1');
    }

    public function object(){
        return view('app.object');
    }

    public function todoList(){
        return view('app.todo-list');
    }

    public function componentCourse(){
        return view('app.component-course');
    }


}
