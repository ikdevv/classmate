<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    protected $guarded = ["id"];

    public function students()
    {
        return $this->belongsToMany(StudentProfile::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

}
