<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortfoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('job', 30)->nullable($value = true);
            $table->string('description', 125)->nullable($value = true);
            $table->string('katakana', 30)->nullable($value = true);
            $table->boolean('sexe')->nullable($value = true);
            $table->date('birthday')->nullable($value = true);
            $table->string('address', 100)->nullable($value = true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('portfolios');
    }
}
