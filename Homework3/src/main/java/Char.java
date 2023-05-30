public class Char {
    public static void main(String[] args) {

        // первый способ с помощью ASCII
        char a = 'O';
        int aa = a;
        System.out.println(aa);

        System.out.println();

        // второй способ с помощью String.valueOf()
        char b = '0';
        int bb = Integer.parseInt(String.valueOf(b));
        System.out.println(bb);

        System.out.println();

        // третий способ с помощью getNumericValue()
        char c = 'O';
        int cc = Character.getNumericValue(c);
        System.out.println(cc + 2);







    }
}
