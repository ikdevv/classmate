<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $guarded = ["id"];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
