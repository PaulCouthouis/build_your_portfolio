<?php

namespace Database\Factories;

use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Factories\Factory;

class PortfolioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Portfolio::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Paul COUTHOUIS',
            'job' => 'Front-end Web Developer',
            'description' => 'フランスでフロントエンドの開発経験が7年間以上あり、フロントエンドのチームリーダーとしての経験もあります。また、フランスにいる時から今まで約三年間日本語を勉 強しており、日本語には多少の自信があります。',
            'katakana' => 'クートイス　ポール',
            'sexe' => '1',
            'birthday' => '1990-08-18T00:00:00.000Z',
            'address' => '大阪府 大阪市'
        ];
    }
}
