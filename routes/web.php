<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/laravel', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/duels/deck', function () {
    return Inertia::render('Duels/Deck');
})->name('deck');

Route::get('/club', function () {
    return Inertia::render('Club/Home');
})->name('club');

Route::get('/duels/signup', function () {
    return Inertia::render('Duels/Signup');
})->name('duels-signup');

Route::get('/events/jdmexperience', function () {
    return Inertia::render('jdmexperience/Home');
})->name('jdmexperience');

Route::get('/events/organizer/signup', function () {
    return Inertia::render('Events/Organizer/Signup');
})->name('events-organizer-signup');

Route::get('/events/organizer/prototype', function () {
    return Inertia::render('Events/Organizer/HomePrototype');
})->name('organizer-prototype');

Route::get('/events/organizer', function () {
    return Inertia::render('Events/Organizer/Home');
})->name('organizer');

Route::get('/events/visitante', function () {
    return Inertia::render('Events/Visitante/Home');
})->name('visitante');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
