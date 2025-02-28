<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use Illuminate\Http\Request;
use App\Models\StudentProfile;
use Illuminate\Support\Facades\Auth;

class ClassroomStudentController extends Controller
{
    public function join(Classroom $classroom)
    {

        $student = Auth::user()->studentProfile;
        $classroom->students()->attach($student->id);
        return redirect()->back()->with('success', 'You have successfully joined the classroom.');
    }

    public function remove(Classroom $classroom, $id)
    {
        $classroom->students()->detach($id);
    }

}
