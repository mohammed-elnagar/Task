<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Article;
use \App\Http\Resources\ArticleResource;
class ArticlesController extends Controller
{
    //

    public function index(){
        $articles = Article::orderBy('created_at', 'desc')->paginate(5);
        return ArticleResource::collection($articles);
    }

    public function show($id){
        $articles = new ArticleResource(Article::find($id));
        return response($articles);
    }

    public function store(Request $request){


        $article = Article::create($request->all());
        return $article;
    }

    public function destroy($id){
        $article = Article::find($id);
        $article->delete();
        return $article;
    }
}
