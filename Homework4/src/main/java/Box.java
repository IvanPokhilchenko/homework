public class Box {
    public int length;
    public int width;
    public int height;

    public Box(int length, int width, int height) {
        this.length = length;
        this.width = width;
        this.height = height;
        System.out.println("Объём коробки равен: " + length * width * height);
    }
}
