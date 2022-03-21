<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShippingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shippings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('num');
            $table->date('shipdate');
            $table->date('arvdate')->nullable();
            $table->string('desc')->nullable();
            $table->string('nameto')->nullable();
            $table->string('address')->nullable();
            $table->string('mobile')->nullable();
            $table->string('shipname')->nullable();
            $table->string('shipdesc')->nullable();
            $table->string('weight')->nullable();
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
        Schema::dropIfExists('shippings');
    }
}
