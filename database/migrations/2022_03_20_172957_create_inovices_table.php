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
            $table->string('price');
            $table->string('qty')->nullable();
            $table->string('discount')->nullable();
            $table->string('status')->nullable();
            $table->bigInteger('orders_id')->unsigned();
            $table->foreign('orders_id')->references('id')->on('orders');
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
