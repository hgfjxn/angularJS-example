angular.module('7minWorkout')
  .controller('WorkoutController', ['$scope', '$interval', function ($scope, $interval) {
	var restExercise;
	var workoutPlan;
	var createWorkout = function () {
		var workout = new WorkoutPlan({
			name: "7minWorkout",
			title: "7 Minute Workout",
			restBetweenExercise: 10
		});

		workout.exercises.push({
			details: new Exercise({
				name: "jumpingJacks",
				title: "Jumping Jacks",
				description: "Jumping Jacks.",
				image: "img/JumpingJacks.png",
				videos: [],
				variations: [],
				procedure: ""
			}),
			duration: 30
		});
		// (TRUNCATED) Other 11 workout exercise data.
		return workout;
	}
	var startExercise = function (exercisePlan) {
		$scope.currentExercise = exercisePlan;
		$scope.currentExerciseDuration = 0;
		$interval(function () {
			++$scope.currentExerciseDuration;
		}
			, 1000
			//设置duration每隔1000ms减1
			, $scope.currentExercise.duration);
	};
	var startWorkout = function () {
		workoutPlan = createWorkout();
		restExercise = {
			details: new Exercise({
				name: "rest",
				title: " Relax!",
				description: " Relax a bit!",
				image: "img/rest.png",

			}),
			duration: workoutPlan.restBetweenExercise
		};
		startExercise(workoutPlan.exercises.shift());
	};
	var init = function () {
		startWorkout();
	};
	init();
}]);
