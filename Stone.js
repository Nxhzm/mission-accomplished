class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :0,
            density:0.2
			}

		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var stone1Pos=this.body.position;	
		push()
		translate(stone1Pos.x, stone1Pos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}