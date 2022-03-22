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
            $table->string('name')->default('شحنة جديدة');
            $table->string('num')->default('0');
            $table->date('shipdate')->default('2020-01-01');
            $table->date('arvdate')->nullable();
            $table->string('desc')->nullable();
            $table->string('nameto')->nullable();
            $table->string('address')->nullable();
            $table->string('mobile')->nullable();
            $table->string('shipname')->nullable();
            $table->string('shipdesc')->nullable();
            $table->string('weight')->nullable();
            $table->bigInteger('orders_id')->unsigned()->nullable();
            $table->foreign('orders_id')->references('id')->on('orders');
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
        Schema::dropIfExists('shippings');
    }
}
