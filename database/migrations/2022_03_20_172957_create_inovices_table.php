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
            $table->string('type')->default('شحنة');
            $table->string('desc')->nullable();
            $table->string('price')->default('0');
            $table->string('qty')->nullable();
            $table->string('discount')->nullable();
            $table->string('status')->nullable();
            $table->bigInteger('orders_id')->unsigned()->nullable();
            $table->foreign('orders_id')->references('id')->on('orders')->nullOnDelete()->onUpdate('SET NULL');
            $table->bigInteger('statuses_id')->unsigned()->nullable();
            $table->foreign('statuses_id')->references('id')->on('statuses');
            $table->bigInteger('actions_id')->unsigned()->nullable();
            $table->foreign('actions_id')->references('id')->on('actions');
            $table->bigInteger('users_id')->unsigned();
            $table->foreign('users_id')->references('id')->on('users');
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
