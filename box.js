AFRAME.registerComponent('box',{
    schema:{
        moveX:{type:'number', default:1},
        moveY:{type:'number',default:1}
    },
    tick:function(){
        this.data.moveX=this.data.moveX+0.03
        this.data.moveY=this.data.moveY+0.05
        var pos = this.el.getAttribute('position')
        pos.y=this.data.moveY
        pos.x=this.data.moveX
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})