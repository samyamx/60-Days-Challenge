#include <stdio.h>

int main()
{
    int arr[] = {1,2,3,5,7,9};

    int left = 0;
    int right = 5;
    int target = 10;

    while(left < right)
    {
        int sum = arr[left] + arr[right];

        if(sum == target)
        {
            printf("%d %d\n", arr[left], arr[right]);
            left++;
            right--;
        }
        else if(sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }

    return 0;
}