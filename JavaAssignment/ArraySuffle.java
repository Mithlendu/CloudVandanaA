package JavaAssignment;

public class ArraySuffle {
    // Function to shuffle the array
    public static void shuffleArray(int[] arr) {
        int n = arr.length;
        for (int i = n - 1; i > 0; i--) {
            // Generate a random index within the remaining unshuffled portion
            int j = (int) (Math.random() * (i + 1));

            // Swap the elements at i and j
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    public static void main(String[] args) {
        // Define the array
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };

        // Shuffle the array
        shuffleArray(array);

        // Print the shuffled array
        for (int value : array) {
            System.out.print(value + " ");
        }
    }
}
