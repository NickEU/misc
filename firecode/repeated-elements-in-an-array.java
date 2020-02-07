import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

class Main {
  public static void main(String[] args) {
    int arr[] = new int[100];
    for (int i = 0; i < 100; i++) {
      arr[i] = ThreadLocalRandom.current().nextInt(1, 101);
    }
    System.out.print("\nInput:\n" + Arrays.toString(arr) + "\n\n" + "Output:\n" + duplicate(arr) + "\n\n");
  }

  public static String duplicate(int[] numbers) {
    Set<Integer> set = new HashSet<>();
    Set<Integer> duplicates = new HashSet<>();
    for (int i = 0; i < numbers.length; i++) {
      int currNumber = numbers[i];
      if (set.contains(currNumber)) {
        duplicates.add(currNumber); // if already present the set is unchanged
      } else {
        set.add(currNumber);
      }
    }
    int[] arr = duplicates.stream().mapToInt(x -> x).toArray(); // mapping Integers to ints
    Arrays.sort(arr);
    return Arrays.toString(arr);
  }
}