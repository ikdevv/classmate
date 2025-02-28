<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\StudentProfile;

class StudentProfileController extends Controller
{
    public function index()
    {
        $students = StudentProfile::all();
        return Inertia::render('students', ['students' => $students]);
    }


    public function create()
    {

    }


    public function store(Request $request)
    {

    }


    public function show(StudentProfile $studentProfile)
    {
        return Inertia::render('studentProfile', ["studentProfile" => $studentProfile, 'classrooms' => $studentProfile->classrooms]);
    }


    public function edit(StudentProfile $studentProfile)
    {
        //
    }


    public function update(Request $request, StudentProfile $studentProfile)
    {
        //
    }


    public function destroy(StudentProfile $studentProfile)
    {
        //
    }
}
