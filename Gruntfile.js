module.exports = function (grunt) {
	grunt.initConfig({
		"bower-install-simple": {
			options: {
				directory: "temp/bower/"
			},
			development: {},
			production: {
				options: {
					production: true,
					interactive: false
				}
			}
		},

		"concat": {
			js: {
				src: [
					"temp/bower/jquery/dist/jquery.min.js",
					"temp/bower/jquery-ui/jquery-ui.min.js",
					"temp/bower/bootstrap/dist/js/bootstrap.min.js",
					"temp/bower/admin-lte/dist/js/app.min.js"
				],
				dest: "src/js/bower-main.js"
			},
			css: {
				src: [
					"temp/bower/bootstrap/dist/css/bootstrap.min.css",
					"temp/bower/font-awesome/css/font-awesome.min.css",
					"temp/bower/ionicons/css/ionicons.min.css",
					"temp/bower/admin-lte/dist/css/AdminLTE.min.css",
					"temp/bower/admin-lte/dist/css/skins/skin-blue.min.css"
				],
				dest: "src/styles/styles.css"
			}
		},

		"uglify": {
			production: {
				files: {
					"src/js/bower-main.js": ["src/js/bower-main.js"]
				}
			}
		},

		copy: {
			common: {
				files: [
					{
						src: ['temp/bower/respond/dest/respond.min.js'],
						dest: 'src/js/',
						flatten: true,
						expand: true
					},
					{
						src: ['temp/bower/html5shiv/dist/html5shiv.min.js'],
						dest: 'src/js/',
						flatten: true,
						expand: true
					},
					{
						src: ['temp/bower/bootstrap/dist/fonts/*'],
						dest: 'src/fonts/',
						flatten: true,
						expand: true
					},
					{
						src: ['temp/bower/ionicons/fonts/*'],
						dest: 'src/fonts/',
						flatten: true,
						expand: true
					},
					{
						src: ['temp/bower/font-awesome/fonts/*'],
						dest: 'src/fonts/',
						flatten: true,
						expand: true
					}
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-bower-install-simple");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("development", [
		"bower-install-simple:development",
		"concat:js", "concat:css",
		"copy:common"
	]);
	grunt.registerTask("production", [
		"bower-install-simple:production",
		"concat:js", "concat:css",
		"uglify:production",
		"copy:common"
	]);
	grunt.registerTask("default", ["development"]);
};
