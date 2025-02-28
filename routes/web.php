<?php

use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\ClassroomStudentController;
use App\Http\Controllers\LessonController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TutorProfileController;
use App\Http\Controllers\StudentProfileController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('student-profile', StudentProfileController::class);
Route::resource('tutor-profile', TutorProfileController::class);
Route::resource('classroom', ClassroomController::class);
Route::resource('lesson', LessonController::class);


Route::post('/classroom/{classroom}/join', [ClassroomStudentController::class, 'join'])->name('classroom.join');
Route::post('/classroom/{classroom}/remove/{id}', [ClassroomStudentController::class, 'remove'])->name('classroom.remove');




require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
