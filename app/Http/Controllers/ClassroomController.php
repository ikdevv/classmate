<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{

    public function index()
    {
        $classrooms = Classroom::all();
        return Inertia::render('classrooms', ["classrooms" => $classrooms]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Classroom::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        $students = $classroom->students;
        $lessons = $classroom->lessons;
        return Inertia::render("classroomProfile", ["classroom" => $classroom, "students" => $students, "lessons" => $lessons]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        $classroom->delete();
    }
}
