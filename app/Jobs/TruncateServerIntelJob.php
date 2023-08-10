<?php

namespace App\Jobs;

use App\Models\MinecraftServerLiveInfo;
use App\Models\MinecraftServerWorld;
use App\Models\MinecraftWorldLiveInfo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use DB;

class TruncateServerIntelJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        DB::transaction(function () {
            // Delete server intel.
            MinecraftWorldLiveInfo::query()->delete();
            MinecraftServerWorld::query()->delete();
            MinecraftServerLiveInfo::query()->delete();
        });
    }
}
