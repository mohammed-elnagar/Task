@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row" dir="rtl">
            {{-- <component-course :course="firstCourse"></component-course> --}}
            <component-course v-for="(course, index) in courses" :course="course" :key="index"></component-course>
        </div>
    </div>
    {{-- {{ url('public/storage/app/courses.json')}} --}}
@endsection
