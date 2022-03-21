<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInovicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inovices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type');
            $table->string('desc')->nullable();
            $table->date('price');
            $table->date('qty')->nullable();
            $table->string('discount')->nullable();
            $table->string('status')->nullable();
            $table->bigInteger('agents_id')->unsigned();
            $table->foreign('agents_id')->references('id')->on('agents')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('users_id')->unsigned();
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('inovices');
    }
}
