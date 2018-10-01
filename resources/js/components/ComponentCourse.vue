<template >
    <div class="col-lg-4">
        <div class="card">
            <img class="card-img-top" :src="course.thumbnails" :alt="course.name">
            <div class="card-body">
                <h5 class="card-title">{{ course.name }}</h5>
                <p class="card-text">{{ course.description }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <i class="fa fa-youtube youtube-color"></i>
                إحصائيات اليوتيوب
                </li>
                <li class="list-group-item">
                <ul class="course-statistics">
                    <li><i class="fa fa-bars"></i> {{ course.statistics.lessons }} درس</li>
                    <li><i class="fa fa-clock-o"></i> {{ course.statistics.duration }}</li>
                    <li><i class="fa fa-play-circle"></i> {{ course.statistics.viewCount }} مشاهدة</li>
                    <li><i class="fa fa-thumbs-up"></i> {{ course.statistics.likeCount }} إعجاب</li>
                    <li><i class="fa fa-comments"></i> {{ course.statistics.commentCount }} تعليق</li>
                </ul>
                </li>
            </ul>
            <div class="card-body">
                <a target="_plank" class="btn btn-secondary btn-block" :href="course.url">شاهد الآن</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'component-course',
        props: {
            course: {required:true, type:Object}
        },

        data(){
            return {
                title: 'Component Example',
            }
        },
    }
</script>

<style lang="scss" scoped>

    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");


    .list-group, .course-statistics {
        padding-right: 0;
    }
    .course-statistics li{
        list-style: none;
        padding-bottom: 5px;
    }
    .youtube-color{
        color: #FF0000;
    }
</style>

