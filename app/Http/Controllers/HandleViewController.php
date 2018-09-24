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

}
