<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $guarded = ["id"];

    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }

    public function links()
    {
        return $this->hasMany(related: Link::class);
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);

    }
}
