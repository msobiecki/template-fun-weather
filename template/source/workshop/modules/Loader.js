const Loader = {
	init: function(target){
		this.target = target;
	},
	catchDOM: function(){
		this.$target = $(this.target);
	}
};

export default Loader;