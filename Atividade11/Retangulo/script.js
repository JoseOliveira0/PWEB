function Retangulo(a, b)
{
    var base = a;
    var altura = b;

    this.calcArea = function()
    {
        return (base * altura); 
    }
     
}

var ret = new Retangulo(20, 15);

alert("Base: 20\nAltura: 15\nÁrea: " + ret.calcArea()); 