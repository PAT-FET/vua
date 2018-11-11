间距总共分为6个级别， 分别是0, .25, .5, 1, 1.5, 3 六个单元, 基本单元跟基本字体大小有关

CSS 辅助类： \
    The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

        Where property is one of:

        m - for classes that set margin
        p - for classes that set padding
        Where sides is one of:

        t - for classes that set margin-top or padding-top
        b - for classes that set margin-bottom or padding-bottom
        l - for classes that set margin-left or padding-left
        r - for classes that set margin-right or padding-right
        x - for classes that set both *-left and *-right
        y - for classes that set both *-top and *-bottom
        blank - for classes that set a margin or padding on all 4 sides of the element
        Where size is one of:

        0 - for classes that eliminate the margin or padding by setting it to 0
        1 - (by default) for classes that set the margin or padding to $spacer * .25
        2 - (by default) for classes that set the margin or padding to $spacer * .5
        3 - (by default) for classes that set the margin or padding to $spacer
        4 - (by default) for classes that set the margin or padding to $spacer * 1.5
        5 - (by default) for classes that set the margin or padding to $spacer * 3
        auto - for classes that set the margin to auto