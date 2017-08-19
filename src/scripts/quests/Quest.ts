abstract class Quest {
    description: string;                     // Short description of how to complete the quest
    pointsReward: number;                    // Quest points rewarded for completion
    xpReward: number;                        // Questing xp points gained for completion
    progress: KnockoutComputed<number>;      // A number between 0 and 1 representing the progress
    isCompleted: KnockoutComputed<boolean>;  // True when quest requirements have been fulfilled

    constructor() {}

    claimReward() {
        if (this.isCompleted()) {
            console.log(`Gained ${this.pointsReward} quest points and ${this.xpReward} xp points`);
        } else {
            console.log("Quest not yet completed");
        }
    }
}