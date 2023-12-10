public class CaloriesOne {

    public double Pi, d1, d2, result1, result2, result3;

    public CaloriesOne(double Pi, int d1, int d2) {
        this.Pi = Pi;
        this.d1 = d1;
        this.d2 = d2;

        bill1(Pi,d1);
        bill2(Pi, d2);
        billcal();
        printResult();
    }
    public double bill1( double Pi, int d1){
        result1 = Pi * Math.pow(d1,2) / 4;
        return result1;
    }
    public double bill2( double Pi, int d2){
        result2 = Pi * Math.pow(d2,2) / 4;
        return result2;
    }

    public double billcal(){
        result3  = (result2 - result1) * 40;
        return result3;
    }
    public void printResult(){
        System.out.println("Площа пиццы с диаметром 24см равно: " + result1);
        System.out.println("Площа пиццы с диаметром 28см равно: " + result2);
        System.out.println("Лишних калорий будет: " + result3);
    }

}
